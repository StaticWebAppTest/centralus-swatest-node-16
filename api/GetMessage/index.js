module.exports = async function (context, req) {
  const date = "2023-06-27T18:12:26.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

