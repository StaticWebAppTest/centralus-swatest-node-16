module.exports = async function (context, req) {
  const date = "2023-02-06T05:09:07.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

