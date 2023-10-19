module.exports = async function (context, req) {
  const date = "2023-10-19T04:10:31.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

