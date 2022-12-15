module.exports = async function (context, req) {
  const date = "2022-12-15T17:09:00.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

