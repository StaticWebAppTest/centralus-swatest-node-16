module.exports = async function (context, req) {
  const date = "2023-01-10T17:09:44.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

