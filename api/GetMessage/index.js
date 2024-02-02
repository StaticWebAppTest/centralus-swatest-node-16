module.exports = async function (context, req) {
  const date = "2024-02-02T06:11:40.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

