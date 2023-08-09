module.exports = async function (context, req) {
  const date = "2023-08-09T09:09:22.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

