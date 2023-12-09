module.exports = async function (context, req) {
  const date = "2023-12-09T04:11:15.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

