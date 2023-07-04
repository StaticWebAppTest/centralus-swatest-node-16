module.exports = async function (context, req) {
  const date = "2023-07-04T14:09:32.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

