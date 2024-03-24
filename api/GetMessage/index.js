module.exports = async function (context, req) {
  const date = "2024-03-24T17:08:19.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

