module.exports = async function (context, req) {
  const date = "2023-05-07T14:07:09.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

