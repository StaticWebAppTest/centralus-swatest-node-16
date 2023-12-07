module.exports = async function (context, req) {
  const date = "2023-12-07T04:11:30.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

