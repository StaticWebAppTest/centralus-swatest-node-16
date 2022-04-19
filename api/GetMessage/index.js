module.exports = async function (context, req) {
  const date = "2022-04-19T06:14:07.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

