module.exports = async function (context, req) {
  const date = "2023-03-23T10:10:06.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

