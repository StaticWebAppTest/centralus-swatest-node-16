module.exports = async function (context, req) {
  const date = "2022-12-16T15:11:22.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

