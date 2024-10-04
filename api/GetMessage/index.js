module.exports = async function (context, req) {
  const date = "2024-10-04T17:10:12.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

