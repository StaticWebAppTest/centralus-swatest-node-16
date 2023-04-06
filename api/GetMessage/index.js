module.exports = async function (context, req) {
  const date = "2023-04-06T04:10:45.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

