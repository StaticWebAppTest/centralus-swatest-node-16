module.exports = async function (context, req) {
  const date = "2023-04-10T06:11:53.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

