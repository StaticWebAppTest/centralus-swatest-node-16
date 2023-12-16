module.exports = async function (context, req) {
  const date = "2023-12-16T07:07:58.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

