module.exports = async function (context, req) {
  const date = "2022-10-13T18:22:18.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

