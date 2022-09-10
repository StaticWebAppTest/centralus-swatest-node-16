module.exports = async function (context, req) {
  const date = "2022-09-10T12:20:44.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

