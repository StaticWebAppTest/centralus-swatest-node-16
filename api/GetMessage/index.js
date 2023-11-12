module.exports = async function (context, req) {
  const date = "2023-11-12T08:10:35.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

