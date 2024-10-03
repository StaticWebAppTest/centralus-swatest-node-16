module.exports = async function (context, req) {
  const date = "2024-10-03T11:09:42.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

