module.exports = async function (context, req) {
  const date = "2023-10-13T15:09:00.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

