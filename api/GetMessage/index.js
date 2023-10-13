module.exports = async function (context, req) {
  const date = "2023-10-13T08:12:17.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

