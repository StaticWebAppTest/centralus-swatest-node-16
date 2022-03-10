module.exports = async function (context, req) {
  const date = "2022-03-10T14:09:09.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

