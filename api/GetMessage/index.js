module.exports = async function (context, req) {
  const date = "2025-02-06T11:09:45.511Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

