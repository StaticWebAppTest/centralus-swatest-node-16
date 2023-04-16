module.exports = async function (context, req) {
  const date = "2023-04-16T11:06:57.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

