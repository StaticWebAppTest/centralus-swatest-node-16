module.exports = async function (context, req) {
  const date = "2022-06-10T06:13:11.561Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

