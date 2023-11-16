module.exports = async function (context, req) {
  const date = "2023-11-16T07:08:45.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

