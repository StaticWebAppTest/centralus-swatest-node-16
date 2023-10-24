module.exports = async function (context, req) {
  const date = "2023-10-24T11:07:24.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

