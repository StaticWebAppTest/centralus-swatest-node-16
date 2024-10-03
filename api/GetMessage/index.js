module.exports = async function (context, req) {
  const date = "2024-10-03T15:12:27.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

