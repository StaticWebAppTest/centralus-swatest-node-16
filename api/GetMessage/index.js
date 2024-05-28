module.exports = async function (context, req) {
  const date = "2024-05-28T18:12:31.174Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

