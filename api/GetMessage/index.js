module.exports = async function (context, req) {
  const date = "2022-10-28T11:11:06.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

