module.exports = async function (context, req) {
  const date = "2023-07-24T16:11:28.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

