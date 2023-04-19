module.exports = async function (context, req) {
  const date = "2023-04-19T06:12:11.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

