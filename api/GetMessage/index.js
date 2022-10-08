module.exports = async function (context, req) {
  const date = "2022-10-08T18:14:59.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

