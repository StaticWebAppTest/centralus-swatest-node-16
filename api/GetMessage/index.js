module.exports = async function (context, req) {
  const date = "2023-10-24T14:07:01.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

