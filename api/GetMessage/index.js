module.exports = async function (context, req) {
  const date = "2024-05-27T18:12:45.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

