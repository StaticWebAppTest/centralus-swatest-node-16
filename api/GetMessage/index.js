module.exports = async function (context, req) {
  const date = "2023-05-04T04:10:39.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

