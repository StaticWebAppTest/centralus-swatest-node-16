module.exports = async function (context, req) {
  const date = "2023-06-27T04:12:03.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

