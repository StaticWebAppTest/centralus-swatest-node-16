module.exports = async function (context, req) {
  const date = "2023-07-16T15:09:01.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

