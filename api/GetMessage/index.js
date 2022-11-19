module.exports = async function (context, req) {
  const date = "2022-11-19T06:13:03.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

