module.exports = async function (context, req) {
  const date = "2023-10-23T18:10:32.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

