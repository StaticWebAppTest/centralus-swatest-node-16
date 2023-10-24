module.exports = async function (context, req) {
  const date = "2023-10-24T07:08:28.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

