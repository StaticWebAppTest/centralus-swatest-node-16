module.exports = async function (context, req) {
  const date = "2024-07-16T15:09:08.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

