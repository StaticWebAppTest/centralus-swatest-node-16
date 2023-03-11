module.exports = async function (context, req) {
  const date = "2023-03-11T09:08:33.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

