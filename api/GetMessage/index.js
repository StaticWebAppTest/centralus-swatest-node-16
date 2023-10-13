module.exports = async function (context, req) {
  const date = "2023-10-13T23:08:21.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

