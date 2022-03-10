module.exports = async function (context, req) {
  const date = "2022-03-10T09:10:32.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

