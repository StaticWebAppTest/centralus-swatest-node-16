module.exports = async function (context, req) {
  const date = "2023-03-17T17:09:00.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

