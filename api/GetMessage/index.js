module.exports = async function (context, req) {
  const date = "2023-07-09T09:09:02.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

