module.exports = async function (context, req) {
  const date = "2023-01-24T15:09:33.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

