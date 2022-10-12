module.exports = async function (context, req) {
  const date = "2022-10-12T09:18:25.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

