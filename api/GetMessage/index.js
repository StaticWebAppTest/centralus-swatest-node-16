module.exports = async function (context, req) {
  const date = "2023-10-24T17:08:04.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

